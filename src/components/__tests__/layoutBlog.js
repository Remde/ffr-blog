import React from "react"
import renderer from "react-test-renderer"

import LayoutBlog from "../layoutBlog.js"

describe("LayoutBlog", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LayoutBlog />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
