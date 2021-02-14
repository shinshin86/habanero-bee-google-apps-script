function getSheetData(sheetName) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var rows = sheet.getDataRange().getValues();

  // Get keys(rows[0]) and Delete rows[0]
  var keys = rows.splice(0,1)[0];

  return rows.map(function(row) {
    var obj = {};
    row.map(function(item, index) {
      obj[String(keys[index])] = String(item);
    });
    return obj;
  });
}

function doGet() {
  var general = getSheetData('general')[0];
  var meta = getSheetData('meta')[0];
  var content = getSheetData('content');

  var data = { general, meta, content };

  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
