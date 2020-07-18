// Entry point

[@bs.val] external document: Js.t({..}) = "document";

ReactDOMRe.render(<CharacterGenerator />, document##getElementById("root"));
