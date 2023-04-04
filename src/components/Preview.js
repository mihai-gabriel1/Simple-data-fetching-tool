import logo from './assets/img/logo.png'

const Preview = ({ selectedCard }) => {
    if (!selectedCard) {
        return (
            <div className="preview col">
                <h2 className="preview-header">Card preview</h2>
            </div>
        );
    }

    return (
        <div className="preview col">
            <h2 className="preview-header mb-5 align-">Card preview</h2>
            <div className="card">
                <div className="card-header p-3 fw-bold text-decoration-underline">
                    <h3 className="card-title">{selectedCard.name}</h3>
                </div>
                <div className="card-body row align-items-center justify-content-between gap-5">
                    <div className='col'>
                        <img src={logo} className="card-logo img-fluid" alt="logo" />

                    </div>

                    <div className='col'>
                        <p><span className='user-age fw-bold'>Age:</span> {selectedCard.age}</p>
                        <p><span className='user-gender fw-bold'>Gender: </span>{selectedCard.gender}</p>
                        <p><span className='user-country fw-bold'>City:</span> {selectedCard.city}</p>
                        <p><span className='user-email fw-bold'>Degree:</span> {selectedCard.degree}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;