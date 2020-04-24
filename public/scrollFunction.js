function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementByClass(containerStyles.navbar).style.padding = "30px 10px";
    document.getElementByClass("navbar").style.padding = "30px 10px";
  } else {
    document.getElementByClass(containerStyles.navbar).style.padding = "80px 10px";
    document.getElementByClass("navbar").style.padding = "80px 10px";
  }
}
