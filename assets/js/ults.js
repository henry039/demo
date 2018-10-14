window.addEventListener("mousemove" ,event=>{
        var moveX = (window.innerWidth /2 - event.pageX) * 0.05;
        var moveY = (window.innerWidth /2 - event.pageY) * 0.05;
        document.getElementById('bg').style.marginLeft = moveX + 'px';
        document.getElementById('bg').style.marginTop = moveY + 'px';
})

let target = document.querySelector('#charts');
    
    let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
        var ctx = document.getElementById('front').getContext('2d');
        let myFrontChart = new Chart(ctx, {
        type: 'doughnut',
        data:  {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ["red", "yellow", "orange"]
        }],
        labels: [
            'HTML',
            'CSS',
            'JavaScript'
        ]
        },
        options: {
            title: {
                display: true,
                text: 'Frontend',
                fontColor:'white',
                fontSize:25
            },
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 25
                }
            }
        }
        });
        var ctx = document.getElementById('back').getContext('2d');
        let myBackChart = new Chart(ctx, {
        type: 'doughnut',
        data:  {
        datasets: [{
            data: [10, 20],
            backgroundColor: ["blue", "DodgerBlue "]
        }],
        labels: [
            'Node Js',
            'Linux'
        ]
        },
        options: {
            title: {
                display: true,
                text: 'Backend',
                fontColor:'white',
                fontSize:25
            },
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize:25
                }
            }
        }
    });
    } 
    });
    });
observer.observe(target);

class TypeWriter {
        constructor(txtElement, words, wait) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.type();
            this.isDeleting = false;
        }

        type() {
            const current = this.wordIndex % this.words.length;
            const fullTxt = this.words[current];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

            let typeSpeed = 250;
            if (this.isDeleting) {
                typeSpeed /= 3;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                typeSpeed = this.wait;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.wordIndex++;
                typeSpeed = 500;
            }
            setTimeout(() => this.type(), typeSpeed);
        }
    }
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
    }