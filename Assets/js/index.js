$(async () => {

    try {
        const responseJson = await fetch('Assets/json/data.json');
        const jobs = await responseJson.json();
        
        let row = '';

        jobs.forEach(job => {
            console.log(job.id);

            row += `<div id="tab" class="row my-3 shadow rounded-lg">
            <div class="mr-3">
                <img " class="ml-4 my-4" src="${'Assets/' + job.logo}">
            </div>
            
            <div style="margin-top: 26px;">
                    <label class="text-muted  company">${job.company}</label>
                    ${job.new ? '<label class="rounded-pill text-white lbl-new">NEW!</label>':''}
                    ${job.featured ?  '<label class="rounded-pill text-white lbl-featured">FEATURED</label>' : ''}
                    <p class="font-weight-bold title mb-0">${job.position}</p>
                    <label class="text-muted company">
                        ${job.postedAt} <span class="mx-2">.</span> 
                        ${job.contract} <span class="mx-2">.</span>
                        ${job.location}
                    </label>
            </div>
            
            <div class="d-inline my-auto ml-auto mr-5" id="filters">
                    
                    <button data-role="${job.role}" type="button" class="mx-1 btn btn-xs text-muted test">
                        ${job.role}
                    </button>
                    <button data-level="${job.level}" type="button" class="mx-1 btn btn-xs text-muted test">
                        ${job.level}
                    </button>
                    

                    ${
                        job.languages.map( lang => {
                            return `<button 
                            id="btn-languages" 
                            data-lang="${lang}"  
                            type="button" 
                            class="mx-1 btn btn-xs text-muted test">
                                 ${lang} 
                            </button>`
                        }).join('')
                    }
                    
                    
                </div>
                
            </div>`;
        });

        $('#main').append(row);

        // $('.btn').hover(() => {
        //     // over
        //     $('.test').att('btn-hover');
        // }, () => {
        //     // out
        //     $('.test').removeClass('btn-hover');
        // });

        $('.test').click((e) =>{ 
            e.preventDefault();

            $('#filterLang').removeClass('d-none').addClass('d-block');

            let dataArray = e.click;

            console.log(dataArray)

            // $('#filterLang').append(dataArray);
        });

    } catch (error) {
        console.log(error)
    }
    
});