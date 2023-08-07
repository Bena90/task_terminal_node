const { v4: uudiv4 } = require('uuid');

class Task {
    id = '';
    description = '';
    completeAt = null;

    constructor(description) {
        this.id = uudiv4();
        this.description = description;
        this.completeAt = null;
    }
};

module.exports = Task;