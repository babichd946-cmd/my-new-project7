$(document).ready(function() {
    console.log("...");

    const labWorks = [
        {
            id: 1,
            title: "Гра 1",
            description: "Магічна куля",
            technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"],
            icon: "fas fa-language",
            link: "https://babichd946-cmd.github.io/",
            color: "bg-lab-1"
        },
        {
            id: 2,
            title: "Гра 2", 
            description: "В кого більше число",
            technologies: ["HTML5", "CSS3", "Bootstrap"],
            icon: "fas fa-laptop-code",
            link: "https://babichd946-cmd.github.io/my-new-project/",
            color: "bg-lab-2"
        },
        {
            id: 3,
            title: "Гра 3",
            description: "21",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            icon: "fas fa-mobile-alt",
            link: "https://babichd946-cmd.github.io/my-new-project2/",
            color: "bg-lab-3"
        },
        {
            id: 4,
            title: "Гра 4",
            description: "Однорукий бандит",
            technologies: ["HTML5", "CSS3", "Bootstrap"],
            icon: "fas fa-rocket",
            link: "https://babichd946-cmd.github.io/my-new-project3/",
            color: "bg-lab-4"
        }
    ];

    // Картки
    function createLabCards() {
        const container = $('#labsContainer');
        
        // Перевірка чи контейнер існує
        if (container.length === 0) {
            console.error("Контейнер не знайдено!");
            return;
        }
        
        labWorks.forEach(lab => {
            const cardHtml = `
                <div class="col-md-6 col-lg-3">
                    <div class="card lab-card">
                        <div class="card-body text-white ${lab.color} position-relative">
                            <div class="text-center">
                                <i class="${lab.icon} card-icon"></i>
                                <h5 class="card-title">${lab.title}</h5>
                            </div>
                            <p class="card-text">${lab.description}</p>
                            <div class="mb-3">
                                ${lab.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <button class="btn btn-light w-100 view-lab-btn" data-lab-id="${lab.id}">
                                <i class="fas fa-external-link-alt me-2"></i>Переглянути
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            container.append(cardHtml);
        });
        
        console.log("Картки створені успішно!");
    }

    // Обробник кліку по кнопці
    $(document).on('click', '.view-lab-btn', function() {
        const labId = $(this).data('lab-id');
        const lab = labWorks.find(l => l.id === labId);
        
        if (lab) {
            $('#modalLink').text(lab.link);
            $('#confirmLink').attr('href', lab.link);
            $('#linkModal').modal('show');
        }
    });
    createLabCards();
});