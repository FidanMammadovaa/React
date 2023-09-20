import { React, useState } from "react";

function Profile(props) {

    const {profile} = props

    return (
        <div>
            <h1>Profile Information</h1>
            <form class="form-inline">
                <div class="col-sm-5">
                    <p>Name: {profile.name}</p>
                </div>
            </form>
            <form class="form-inline">
                <div class="col-sm-5">
                    <p>Age: {profile.age}</p>
                </div>
            </form>
            <form class="form-inline">
                <div class="col-sm-5">
                    <p>Profession: {profile.profession}</p>
                </div>
            </form>
            <form class="form-inline">
                <div class="col-sm-5">
                    <p>Favorite book: {profile.favoriteBook}</p>
                </div>
            </form>

           
        </div>
    )
}

export default Profile