AFRAME.registerComponent("terrain_component", {
  schema: {
    to: { default: "2.5 2.5 2.5", type: "vec3" },
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("mouseenter", function () {
      el.object3D.scale.copy(data.to);
    });
  },

  tick: function (time, delta) {
    var rotation = this.el.getAttribute("rotation");

    // Update the rotation based on the component's schema values
   
    // Set the new rotation on the entity
    this.el.setAttribute("rotation", rotation);
  },
});
