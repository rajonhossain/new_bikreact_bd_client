const axios = require('axios').default;


const cat_getdata = async () => {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/cata_get_client')
        return res.data;
    }
    catch (err) {
        console.error("wrong", err);
    }
}



const subcat_getdata = async () => {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/subcat_getclient')
        return res.data;
    }
    catch (err) {
        console.error("wrong", err);
    }
}




const sub_cat_data = async (e) => {
    try {
        var dx
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: e })
        };
        await fetch('http://screete.bikretabd.com/admin/sub_cata_sub_id_client', requestOptions)
            .then(response => response.json())
            .then((res) => {
                dx = res;
            });
        return dx;
    }
    catch (err) {
        console.log(err);
    }
}



const additems_data = async (event) => {
    
    try {
        var itemfile
        const itemsdta = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: event })
        };
        await fetch('http://screete.bikretabd.com/admin/item_client', itemsdta)
            .then(response => response.json())
            .then((res) => {
                itemfile = res;
            });
        return itemfile;
    }
    catch (err) {
        console.log(err);
    }
}




const add_card_items_local_data = async() => {
    try {
        var add_items = await JSON.parse(localStorage.getItem("add_items") || "[]");        
        return add_items;
    }
    catch (err) {
        console.log(err);
    }
}



const single_items = async (event) => {
    
    try {
        var itemfile
        const itemsdta = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: event })
        };
        await fetch('http://screete.bikretabd.com/admin/signle_item_get_client', itemsdta)
            .then(response => response.json())
            .then((res) => {
                itemfile = res;
            });
        return itemfile;
    }
    catch (err) {
        console.log(err);
    }
}


export { 
    cat_getdata,
    subcat_getdata,
    sub_cat_data,    
    additems_data,
    add_card_items_local_data,
    single_items
 };





