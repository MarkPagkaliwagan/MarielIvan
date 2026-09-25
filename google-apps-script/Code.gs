const SHEET_NAME = "Sheet1";
const EMAIL_TO = "YOUR_EMAIL@gmail.com";
const EMAIL_SUBJECT = "New Wedding RSVP";

function doPost(e) {
  try {
    const payload =
      typeof e?.postData?.contents === "string"
        ? JSON.parse(e.postData.contents || "{}")
        : {};

    const name = String(payload.fullName || "").trim();
    const rsvp = String(payload.attending || "").trim();
    const guestsRaw = parseInt(payload.guests, 10);
    const companion = String(payload.companionName || "").trim();
    const message = String(payload.message || "").trim();

    if (!name) {
      return respond(false, "Missing guest name.");
    }
    if (rsvp !== "I'll be there" && rsvp !== "I'll be there in spirit") {
      return respond(false, "Missing or invalid attendance choice.");
    }

    const accepted = rsvp === "I'll be there";
    const safeGuests = accepted && !isNaN(guestsRaw) && guestsRaw > 0 ? guestsRaw : 0;
    const safeCompanion = accepted ? companion : "";

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return respond(false, `Sheet "${SHEET_NAME}" not found.`);
    }

    sheet.appendRow([
      new Date(),
      name,
      rsvp,
      safeGuests,
      safeCompanion,
      message,
    ]);

    const emailBody = [
      "New RSVP received.",
      "",
      "Name: " + name,
      "Response: " + rsvp,
      "Guests: " + (accepted ? safeGuests : 0),
      "Companion: " + (safeCompanion || "(none)"),
      "Message: " + (message || "(none)"),
      "",
      "Submitted: " + new Date().toLocaleString(),
    ].join("\n");

    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: EMAIL_SUBJECT,
      body: emailBody,
    });

    return respond(true);
  } catch (error) {
    return respond(false, error && error.message ? error.message : "Server error.");
  }
}

function respond(success, error) {
  const body = success
    ? { success: true }
    : { success: false, error: error || "Unexpected error." };
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}