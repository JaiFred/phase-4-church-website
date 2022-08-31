
import react, { useState } from "react";
import { useEffect } from 'react'

import BulletinDetails from "./BulletinDetails";

function BulletinContainer({ showBulletins, setShowBulletins }){
    const bulletinList = showBulletins.map((bulletin) =>(
        <BulletinDetails key={bulletin.id} bulletin={bulletin}/>
    ))

    // function WatchContainer({ watches, handleDeleteWatch }){
    // const watchCardList = watches.map((watch)=>(
    //     <WatchCard key={watch.id} watch={watch} handleDeleteWatch={handleDeleteWatch}/>
    // ))


    // t.string :title
    // t.string :activity
    // t.datetime :starts
    // t.datetime :ends
    // t.belongs_to :admin, null: false, foreign_key: true
    // t.belongs_to :member, null: false, foreign_key: true

    const { id, title, activity, starts, ends } = showBulletins

    
    


    return (

        <div>
            <p>{title}</p>
        </div>
        
    )
}

export default BulletinContainer