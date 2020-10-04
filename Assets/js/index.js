$(async () => {

    try {
        const responseJson = await fetch('Assets/json/data.json');
        const jobs = await responseJson.json();
        
        let row = '';

        jobs.forEach(job => {

            row += `<div id="tab" class="${job.featured ? 'bd-callout' : ''} row my-3 shadow rounded-lg">
            <div class="mr-3">
                <img " class="ml-4 my-4" src="${'Assets/' + job.logo}">
            </div>

            
            
            <div style="margin-top: 26px;">
                    <label class="text-muted  company">${job.company}</label>
                    ${job.new ? `<label class="rounded-pill text-white lbl-new">NEW!</label>`:``}
                    ${job.featured ? `<label class="rounded-pill text-white lbl-featured">FEATURED</label>` : ``}
                    <p class="font-weight-bold title mb-0">${job.position}</p>
                    <label class="text-muted company">
                        ${job.postedAt} <span class="mx-2">.</span> 
                        ${job.contract} <span class="mx-2">.</span>
                        ${job.location}
                    </label>
            </div>
            
            <div class="d-inline my-auto ml-auto mr-5" id="filters">
                    
                    <button id="btn-role" 
                    data-value="${job.role}" 
                    type="button" 
                    class="mx-1 btn btn-xs text-muted test"
                    onclick="addingToArray(${job.role})">
                        ${job.role}
                    </button>

                    <button id="btn-level" 
                    data-value="${job.level}" 
                    type="button" 
                    class="mx-1 btn btn-xs text-muted test"
                    onclick="addingToArray(${job.level})">
                        ${job.level}
                    </button>

                    ${
                        job.languages.map( lang => {
                            return `<button 
                            id="btn-languages" 
                            data-value="${lang}"  
                            type="button" 
                            class="mx-1 btn btn-xs text-muted test"
                            onclick="addingToArray(${lang})">
                                 ${lang} 
                            </button>`
                        }).join('')
                    }
                    
                </div>
                
            </div>`;
        });

        $('#main').append(row);

        // $('.btn').hover((e) => {
        //     // over
        //     $(e.target).addClass('bg-hover');
        // }, (e) => {
        //     // out
        //     $(e.target).removeClass('bg-hover');
        // });

        // $('.test').click((e) =>{ 
        //     e.preventDefault();

        //     const filter = new Set();

        //     switch (e.target.dataset.value) {
        //         case `Frontend`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Backend`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Fullstack`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Senior`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Midweight`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Junior`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `HTML`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `CSS`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `JavaScript`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Ruby`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //             break;
        //         case `Python`:
        //             filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${e.target.dataset.value}</button>`);
        //         break;
        //         default:
        //             break;
        //     }
            // $('#filterLang').removeClass('d-none').addClass('d-flex d-block');
            
            // filter.forEach(tag => {
            //     $('#btn-tags').append(tag);
            // })

        // });
        
        
    } catch (error) {
        console.log(error)
    }
    

});

$('#btn-clear').click((e) => { 
    e.preventDefault();
    
    $('#btn-tags').html('');
});

function addingToArray(tagAdded){
    e.preventDefault();
    debugger;
    const filter = new Set();

    filter.add(`<button class="tag clear mx-1 btn btn-xs text-muted mr-auto">${tagAdded}</button>`);

    $('#filterLang').removeClass('d-none').addClass('d-flex d-block');

    $('#btn-tags').append(filter);
}