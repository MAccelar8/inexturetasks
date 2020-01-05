var containerEl = document.querySelector(".work-filter");
var mixer;

if (containerEl) {
  mixer = mixitup(containerEl, {
    selectors: {
      control: "[data-filter]"
    },
    load: {
      filter: ".mix"
    }
  });
}


$(".grid").masonry({
  // options
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  gutter: 25
});

$('.work-filter').on('mixEnd', function() {
    
$(".grid").masonry({
  // options
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  gutter: 25
});
  });
