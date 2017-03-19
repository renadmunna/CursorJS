CursorJS(v1.17.03.19) is simple javascript function library,
which can dynamically create cursor with the help of SVG.

Documentation:

# For image cursor(The conventional way)
cursor({
  domElement:document.body,
  type:"img",
  filePath:"type/cursor.png"
});

# With javascript string (Best way to use)
cursor({
  domElement:document.body,
  type:"svg",
  svgString:cursor_svg_string
});

# with SVG element in html (Hide SVG container)
cursor({
  domElement:document.body,
  type:"svg",
  svgElement:document.getElementById("svg")
});

# From external SVG File (Delay for loading SVG)
cursor({
  domElement:document.body,
  type:"svg",
  filePath:"type/cursor.svg"
});


***Canvas rander will be added soon.
