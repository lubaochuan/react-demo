console.log("hello world!")

const jsContainer = document.getElementById("js")
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
    <p>${new Date()}</p>
  </div>`

const reactContainer = document.getElementById("react")
ReactDOM.render(
  React.createElement(
    "div",
    { className: "demo" },
    "Hello React",
    React.createElement("input"),
    React.createElement(
      "p",
      null,
      new Date().toString()
    )
  ),
  reactContainer
)
