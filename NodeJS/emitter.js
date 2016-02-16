'use strict'
class Emitter {
    
    constructor() {
        this.event = {};
    }
    
    on (eType, listener) {
        this.event[eType] = this.event[eType] || [];
        this.event[eType].push(listener);
    }
    
    emit (eType) {
        this.event[eType].forEach((listener) => {
            listener();
        })
    }
}

module.exports = Emitter;