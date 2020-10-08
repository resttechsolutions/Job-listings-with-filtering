let filter = new Set();
let allJobs = new Set();
$(async () => {

    try {
        const responseJson = await fetch('Assets/json/data.json');
        const jobs = await responseJson.json();
        allJobs = jobs;
        let row = '';

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

    } catch (error) {
        console.log(error)
    }
    

});

function clearBar(){

    filter.clear();

    $('#btn-tags').html('');

    $('#filterLang').removeClass('d-flex d-block').addClass('d-none');
}

function addingToArray(tagAdded){

    $('#btn-tags').html('');

    if(!filter.has(tagAdded)){
        
        filter.add(tagAdded);

        // debuggertagAdded
        // const allFilterTabs = document.querySelectorAll('.test');

        // for (let i = 0; i < allFilterTabs.length; i++) {
        //     console.log(allFilterTabs[i].attributes='data-value')
        //     if(!allFilterTabs[i].dataset == tagAdded){
        //         document.querySelectorAll('#tab').addClass='d-none';
        //     } else {
        //         document.querySelectorAll('#tab').classRemove='d-none';;
        //     }
        // }

        // TESTING

        for (let i = 0; i < allJobs.size; i++) {
            if (!allJobs[i].role == tagAdded) {
                document.querySelectorAll('.filtered').forEach(t => {
                    t.addClass = 'd-none'
                });
            }
            
        }

        // allJobs.forEach(job => {
        //     if(!tagAdded == job.role){
        //         $('.filtered').addClass('d-none');
        //     }
        // })

        // allJobs.filter(job => {


        //     if(!job.role == tagAdded || !job.level == tagAdded){
        //         $('.filtered').addClass('d-none');
        //     }
        // });
        
        // TESTING
        
        $('#filterLang').removeClass('d-none').addClass('d-flex d-block');
        
    }

    for(let f of filter){
        $('#btn-tags').append(`<button onclick="deletingFilter('${f}')" class="tag clear mx-1 btn btn-xs text-muted mr-auto">${f}</button>`);
    }
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

function filteringJobs(){

}