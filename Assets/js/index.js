$(() => {
    fetch('Assets/json/data.json')
    .then(res => res.json())
    .then(items => {

        let tab = '';

        for (const item of items) {
            tab += `<div id="tab" class="row my-3 shadow rounded-lg">
                <div class="mr-3">
                    <img " class="ml-4 my-4" src="${'Assets/' + item.logo}">
                </div>

                <div style="margin-top: 26px;">
                    <label class="text-muted  company">${item.company}</label>
                    ${item.new ? '<label class="rounded-pill text-white lbl-new">NEW!</label>':''}
                    ${item.featured ?  '<label class="rounded-pill text-white lbl-featured">FEATURED</label>' : ''}
                    <p class="font-weight-bold title mb-0">${item.position}</p>
                    <label class="text-muted company">
                        ${item.postedAt} <span class="mx-2">.</span> 
                        ${item.contract} <span class="mx-2">.</span>
                        ${item.location}
                    </label>
                </div>

                <div class="d-inline my-auto ml-auto mr-5" id="filters">
                    
                    <button type="button" class="mx-1 btn btn-xs text-muted">
                        ${item.role}
                    </button>
                    <button type="button" class="mx-1 btn btn-xs text-muted">
                        ${item.level}
                    </button>
                    

                    ${
                        item.languages.map( lang => {
                            return `<button type="button" class="mx-1 btn btn-xs text-muted">
                                 ${lang} 
                            </button>`
                        }).join('')
                    }
                    
                    
                </div>
                
            </div> `
            
        }

        $('#main').append(tab);
        
    });
});
