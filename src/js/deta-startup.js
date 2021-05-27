const isDetaRuntime = location.hostname === "deta.app"
    || location.hostname === "deta.dev"
    || location.hostname === "127.0.0.1";

const detaMods = () => {
    // replace menu with Deta Options
    document.getElementById("file_menu_main").innerHTML =
        `
      <div class="menu_title">File</div>
      <div class="menu_list" id="file_menu">
        <div data-action="clear" id="tool_clear" class="menu_item">New Document</div>
        <div data-action="cloudOpen" id="tool_copen" class="menu_item">Open Document</div>
        <div data-action="cloudSave" id="tool_csave" class="menu_item">Save<span class="shortcut">⌘S</span></div>
        <div data-action="cloudSaveAs" id="tool_csaveas" class="menu_item">Save As
        </div>
        <div id="tool_open" class="menu_item">
          Import SVG... <span class="shortcut">⌘O</span></div>
        <input type="file" accept="image/svg+xml" />
    
        <div id="tool_import" class="menu_item">
          Place Image... <span class="shortcut">⌘K</span></div>
        <input type="file" accept="image/*" />
        <div data-action="save" id="tool_save" class="menu_item">Export SVG </div>
        <div data-action="export" id="tool_export" class="menu_item">Export as PNG</div>
      </div>`;
}

if (isDetaRuntime) {
    detaMods();
}