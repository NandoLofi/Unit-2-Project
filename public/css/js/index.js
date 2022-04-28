
//delete button
if(window.location.pathname=='/'){
    $onDelete = $('.table tbody td a.delete')
    $onDelete.Onclick(function(){
        let id = $(this).attr('data-id')
        
        let request = {
            'url': `http://locahost:3000/api/playlist/${id}`,
            'method': 'DELETE',
        }
    })
}