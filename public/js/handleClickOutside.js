// handleClickOutside.js

const handleClickOutside = (modalId, closeModalFunction) => {
    return (event) => {
        const modal = document.getElementById(modalId);
        
        if (event.target === modal) {
            closeModalFunction();
        }
    };
};

