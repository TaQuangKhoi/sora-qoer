import fontPickerHTML from "url:./panels/test/index.html"

chrome.devtools.panels.create(
  "Font Picker",
  null,
  // See: https://github.com/PlasmoHQ/plasmo/issues/106#issuecomment-1188539625
  fontPickerHTML.split("/").pop()
)

// chrome.devtools.panels.elements.createSidebarPane(
//     "Font Properties",
//     function (sidebar) {
//         sidebar.setPage(fontPropertiesHTML.split("/").pop())
//     }
// )

chrome.devtools.network.onRequestFinished.addListener((request) => {
  console.log("Request Finished:", request)
  request.getContent((body) => {
    if (request.request && request.request.url) {
      console.log("Request Body:", body)
      if (request.request.url.includes("<url-to-intercept>")) {
        chrome.runtime.sendMessage({
          response: body
        })
      }
    }
  })
})

function IndexDevtools() {
  return (
    <h2>
      Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
    </h2>
  )
}

export default IndexDevtools
