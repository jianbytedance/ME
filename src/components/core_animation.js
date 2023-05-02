AFRAME.registerComponent("scale-on-mouseenter", {
  schema: {
    to: { default: "20 20 20", type: "vec3" },
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("mouseenter", function () {
      el.object3D.scale.copy(data.to);
    });
  },

  tick: function (time, delta) {
    //var rotation = this.el.getAttribute("rotation");

    // Update the rotation based on the component's schema values
    // rotation.y += 0.3;

    // Set the new rotation on the entity
    //this.el.setAttribute("rotation", rotation);
  },
});
