import React, { useState } from 'react';
import '/home/pparnavi/product_phase/src/styles/tournament_form.css'

function TournamentForm() {
    const [tournamentName, setTournamentName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [playerNames, setPlayerNames] = useState('');
    const [teamNameFile, setTeamNameFile] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);

    function handleTeamNameFileUpload(event: any) {
        setTeamNameFile(event.target.files[0]);
        setIsUploaded(false);
    }

    const handleUpload = () => {
        console.log("file uploaded");
        setIsUploaded(false);
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('tournamentName', tournamentName);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('playerNames', playerNames);
        formData.append('teamNameFile', teamNameFile);

        fetch('/api/create-tournament', {
            method: 'POST',
            body: formData
        }).then(response => {
            // Handle the response from the server.
        }).catch(error => {
            // Handle any errors that occurred during the request.
        });
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="tournamentName">Tournament Name:</label>
                    <input type="text" id="tournamentName" name="tournamentName" value={tournamentName} onChange={event => setTournamentName(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" value={startDate} onChange={event => setStartDate(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" id="endDate" name="endDate" value={endDate} onChange={event => setEndDate(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="playerNames">Player Names:</label>
                    <textarea id="playerNames" name="playerNames" value={playerNames} onChange={event => setPlayerNames(event.target.value)} />
                </div>

                <div className='form-group fileUpload' >
                    <label className='fileUploadLabel' htmlFor="teamNameFile">Team Name (Excel file):</label>
                    {/* <div className='fileUpload'> */}
                    <label className='fileUploadLabel chooseFile' htmlFor='teamNameFileInput' >
                        {teamNameFile ? teamNameFile : "Choose file"}

                        <input className='red' type="file" id="teamNameFile" name="teamNameFile" accept=".xlsx,.xls" onChange={handleTeamNameFileUpload} />
                    </label>
                    {/* </div> */}
                </div>

                <div className='form-group'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default TournamentForm;
