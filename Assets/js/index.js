let filter = new Set();
let jobs = new Set();
let filteredJobs = new Array();
let row = '';

$(async () => {

    try {
        const responseJson = await fetch('Assets/json/data.json');
        jobs = await responseJson.json();
    } catch (error) {
        console.log(error)
    }

    showJobs();
});

function showJobs(){
    if (filteredJobs.length == 0) {
        jobs.forEach(job => {

            row += `<div id="tab" class="${job.featured ? 'bd-callout ' : ''} row my-3 shadow rounded-lg filtered">
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
                    onclick="addingToArray('${job.role}')">
                        ${job.role}
                    </button>

                    <button id="btn-level" 
                    data-value="${job.level}" 
                    type="button" 
                    class="mx-1 btn btn-xs text-muted test"
                    onclick="addingToArray('${job.level}')">
                        ${job.level}
                    </button>

                    ${
                        job.languages.map( lang => {
                            return `<button 
                            id="btn-languages" 
                            data-value="${lang}"  
                            type="button" 
                            class="mx-1 btn btn-xs text-muted test"
                            onclick="addingToArray('${lang}')">
                                 ${lang} 
                            </button>`
                        }).join('')
                    }
                    
                </div>
                
            </div>`;
        });
        
        $('#main').append(row);
    
    } else {

        // $('#main').html('');

        filteringJobs(filteredJobs);
    }
}

function clearBar(){

    filter.clear();

    $('#btn-tags').html('');

    $('#filterLang').removeClass('d-flex d-block').addClass('d-none');
}

function addingToArray(tagAdded){

    $('#btn-tags').html('');

    if(!filter.has(tagAdded)){
        
        filter.add(tagAdded);

        filteredJobs = jobs.filter(job => job.role.toLowerCase() == tagAdded.toLowerCase() 
        || job.level.toLowerCase() == tagAdded.toLowerCase());

        showJobs();

        filteredJobs.forEach(j => {
            console.log(j)
        })
        
        
        $('#filterLang').removeClass('d-none').addClass('d-flex d-block');
        
    }

    for(let f of filter){
        $('#btn-tags').append(`<button onclick="deletingFilter('${f}')" class="tag clear mx-1 btn btn-xs text-muted mr-auto">${f}</button>`);
    }
}

function filteringJobs(filteredJobs){
    $('#main').html('');
    
    row = '';

    filteredJobs.forEach(job => {

        row += `<div id="tab" class="${job.featured ? 'bd-callout ' : ''} row my-3 shadow rounded-lg filtered">
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
                onclick="addingToArray('${job.role}')">
                    ${job.role}
                </button>

                <button id="btn-level" 
                data-value="${job.level}" 
                type="button" 
                class="mx-1 btn btn-xs text-muted test"
                onclick="addingToArray('${job.level}')">
                    ${job.level}
                </button>

                ${
                    job.languages.map( lang => {
                        return `<button 
                        id="btn-languages" 
                        data-value="${lang}"  
                        type="button" 
                        class="mx-1 btn btn-xs text-muted test"
                        onclick="addingToArray('${lang}')">
                             ${lang} 
                        </button>`
                    }).join('')
                }
                
            </div>
            
        </div>`;
    });

    $('#main').append(row);

}

function deletingFilter(tagToDelete){

    filter.delete(tagToDelete);

    $('#btn-tags').html('');

    filter.forEach(f => {
        $('#btn-tags').append(`<button onclick="deletingFilter('${f}')" class="tag clear mx-1 btn btn-xs text-muted mr-auto">${f}</button>`);
    });

    if (filter.size == 0) {
        clearBar();

    }
    
}
