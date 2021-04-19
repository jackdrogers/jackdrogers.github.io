// When the user scrolls the page, execute myFunction
let navigation = document.getElementById('navigation'),
	sticky = 200,
	skillsGraph = document.querySelector('.skills-graph'),
	boundingBox = skillsGraph.getBoundingClientRect();

console.log(window.pageYOffset > boundingBox.top)
	
window.onscroll = () => {
	if(!navigation.classList.contains('sticky') || window.pageYOffset < sticky) {
		window.pageYOffset > sticky ? navigation.classList.add('sticky') : navigation.classList.remove('sticky');
	}

	
	if(isScrolledIntoView(skillsGraph)) {
		skillsGraph.classList.add('init')		
	}
};

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}