var isLoaded = false;

function addLoadListener(callback) {
    if (typeof window !== 'undefined') {
        window.addEventListener('load', callback);
    } else {
        callback();
    }
}

addLoadListener(function() {
    isLoaded = true;
});

function isWindowLoaded() {
    return isLoaded || document.readyState === 'complete';
}

function onWindowLoad(callback) {
    if (callback && typeof callback === 'function') {
        if (isWindowLoaded()) {
            callback();
        } else {
            addLoadListener(callback);
        }
    }
}

export default onWindowLoad;
