class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.current = this._getMean();
    }

    guess() {
        return this.current;
    }

    lower() {
        this.max = this.current;
        this.current = this._getMean();
    }

    greater() {
        this.min = this.current;
        this.current = this._getMean();
    }

    _getMean() {
        return Math.round((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
