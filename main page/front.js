let currentTestimonial = 0;

function changeTestimonial(direction) {
    const testimonials = document.querySelector('.testimonial-carousel');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');

    currentTestimonial += direction;

    if (currentTestimonial < 0) {
        currentTestimonial = testimonialSlides.length - 1;
    } else if (currentTestimonial >= testimonialSlides.length) {
        currentTestimonial = 0;
    }

    const translateValue = -currentTestimonial * 100 + '%';
    testimonials.style.transform = 'translateX(' + translateValue + ')';
}
