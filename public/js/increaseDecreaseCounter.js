// wishlistButton.js

const increaseCounter = (targetId) => {
    // Get the target to increase
    const targetToIncrease = document.getElementById(targetId);

    // increase the target element by 1
    if (targetToIncrease) {
        targetToIncrease.textContent = parseInt(targetToIncrease.textContent) + 1;
    }
};


const decreaseCounter = (targetId) => {
    // Get the target to increase
    const targetToDecrease = document.getElementById(targetId);

    // decrease the target element by 1. Floor at 0.
    if (targetToDecrease) {
        if(targetToDecrease.textContent > 0){
            targetToDecrease.textContent = parseInt(targetToDecrease.textContent) - 1;
        }
        
    }
};