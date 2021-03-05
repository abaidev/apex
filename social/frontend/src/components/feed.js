import React, {useState, useEffect, createRef} from 'react';

const get_profiles = async (api) => {
    let topUsers = await fetch(api)
        .then(res => res.json())
        .then(customers => customers);
    return topUsers;
};

const Pano = ({api}) => {
    const [topList, setTopList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        let topList = get_profiles(api);
        topList.then(data => setTopList(data.reverse()));
    }, [refresh]);

    return (
        <>
            <div className="d-grid gap-2 d-md-block mt-5">
                <button onClick={()=>{get_profiles(); setRefresh(!refresh)}}
                        className="btn btn-outline-info" type="button">Загрузить последние регистрации</button>
            </div>

            {topList.length > 0 &&
                <div className="d-grid gap-3">
                    <h4 className="mb-3 mt-5">Список зарегистрированных </h4>
                    {topList.map((item, ind)=>{
                        return <ProfileCard item={item} key={ind+3} id={item.id} />
                    })}
                </div>
            }

        </>
    )
};


const ProfileCard = ({item, id, toRefresh})=>{
    return (
        <div className="col border border-secondary border-2 p-2 rounded mb-3">
            <div className="row pe-2">

                <div className="col">
                    <h6 className="title"><span className="text-info">Ф.И.О.:</span> {item.fullname}</h6>
                    <p className="h6"><span className="text-info">Адрес:</span> {item.address}</p>
                    <p className="h6"><span className="text-info">Телефон:</span> {item.phone_number}</p>
                    <p className="h6"><span className="text-info">ИНН:</span> {item.tin}</p>
                </div>

            </div>
        </div>
    )
};

export default Pano;