"use client";

import { useState } from "react";
import axios from "axios";

const availableRegions = ["Europe", "Americas", "Asian", "Esports"];

export default function Home() {
    const [summonerName, setSummonerName] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("Europe");

    function handleSearch() {
        const tags = summonerName.split("#")[1];
        const names = summonerName.split("#")[0];
        const lowercaseRegion = selectedRegion.toLowerCase();
        const baseURL = `https://${lowercaseRegion}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/`;
        const api_key: string = "RGAPI-7695ff9d-8f12-4cd4-aab1-681ea1db9a21" || process.env.API_KEY;

        axios.get(`${baseURL}${names}/${tags}?api_key=${api_key}`).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl mb-4">League Search</h1>
            <p className="mb-4">Search for a League of Legends player</p>
            <div className="flex">
                <input
                    type="text"
                    placeholder="summonerName#TAG"
                    className="mb-4 mr-2 p-2 border border-gray-300 rounded-md"
                    value={summonerName}
                    onChange={(e) => setSummonerName(e.target.value)}
                />
                <select
                    className="mb-4 p-2 border border-gray-300 rounded-md"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                >
                    {availableRegions.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSearch} className="p-2 bg-blue-500 w-48 text-white rounded-md">Search</button>
        </main>
    );
}
