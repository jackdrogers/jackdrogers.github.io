// When the user scrolls the page, execute myFunction
let navigation = document.getElementById('navigation'),
	sticky = 200,
	skillsGraph = document.querySelector('.skills-graph'),
	boundingBox = skillsGraph.getBoundingClientRect();

window.onscroll = () => {
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