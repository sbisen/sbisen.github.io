function expandDetail(expertise) {
    const title = document.getElementById('detail-title');
    const desc = document.getElementById('detail-desc');
    const panel = document.getElementById('detail-panel');

    panel.classList.remove('hidden'); // Show the panel

    // Update content based on clicked expertise
    switch (expertise) {
        case 'ml':
            title.innerHTML = 'End-to-End ML';
            desc.innerHTML = 'Comprehensive machine learning workflows from data collection to model deployment.';
            break;
        case 'ai':
            title.innerHTML = 'Productionalizing ML/AI';
            desc.innerHTML = 'Streamlining the integration of machine learning models into production environments.';
            break;
        case 'data':
            title.innerHTML = 'Big Data & Data Pipeline';
            desc.innerHTML = 'Handling large-scale data processing and analysis pipelines efficiently.';
            break;
        case 'cloud':
            title.innerHTML = 'Cloud Computing AWS';
            desc.innerHTML = 'Utilizing AWS cloud services to enhance computing and storage capabilities.';
            break;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});
