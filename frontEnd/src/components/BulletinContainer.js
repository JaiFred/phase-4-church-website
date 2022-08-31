
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

        <div className="bulletin-container">
            <div className="bulletin-list">
                <div className="first-bulletin">
                    <p>title: "Morning Prayer", activity: "Regular Service", starts: "8/30/2022", ends: "8/30/2022", member_id: Member.first.id, admin_id: Admin.first.id"</p>
                </div>
                <div className="second-bulletin">
                    <p>title: "Community Gardening", activity: "Community Service", starts: "9/1/2022", ends: "9/1/2022", member_id: m2.id, admin_id: ad1.id</p>
                </div>
                <div className="third-bulletin">
                    <p>title: "Community Jungle Gym Fundraiser", activity: "Community Service", starts: "2/14/2022", ends: "10/25/2022", member_id: m3.id, admin_id: ad1.id</p>
                </div>
                <div className="fourth-bulletin">
                    <p>title: "Late Service", activity: "Regular Service", starts: "8/26/2022", ends: "8/26/2022", member_id: m4.id, admin_id: ad1.id</p>
                </div>
                <div className="fifth-bulletin">
                    <p>title: "Weekend Potluck", activity: "Outside Service", starts: "9/16/2022", ends: "9/16/2022", member_id: m3.id, admin_id: ad1.id</p>
                </div>
            </div>
        </div>
        
    )
}

export default BulletinContainer