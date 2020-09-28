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
                    <label class="rounded-pill text-wrap text-white lbl-new">${item.new && `<span>NEW!</span>`}</label>
                    <label class="rounded-pill lbl-featured text-white">FEATURED</label>
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
                                 ${lang} x
                            </button>`
                        }).join('')
                    }
                    
                    
                </div>

            </div>`
            ;
            
            if (item.featured) {
                $('#tab').attr('style', 'bd-callout');
            }
        }

        $('#main').append(tab);

        // for (const item of items) {
            $('#img').attr('src', `Assets/${items[0].logo}`) ;
            // console.log(item.logo)
        // }
    });
});
