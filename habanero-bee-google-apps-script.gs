const getSheetData = sheetName => {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  const rows = sheet.getDataRange().getValues();

  // Get keys(rows[0]) and Delete rows[0]
  const keys = rows.splice(0,1)[0];

  return rows.map((row) => {
    var obj = {};
    row.map((item, index) => {
      obj[String(keys[index])] = String(item);
    });
    return obj;
  });
}

const doGet = () => {
  const general = getSheetData('general')[0];
  const meta = getSheetData('meta')[0];
  const content = getSheetData('content');

  const data = { general, meta, content };

  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
