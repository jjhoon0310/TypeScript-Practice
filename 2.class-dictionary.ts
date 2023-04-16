// Dictionary type
type Words = {
    [key: string]: string;
};

// Word type
class Word {
    constructor(public term: string, public def: string) {}
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }

    // Adds a word in a object form
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    // Gets the word from the dictionary
    get(term: string) {
        return this.words[term];
    }

    // Deleting a word from dictionary
    delete(term: string) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }

    // Update the definiton of a word that exists
    update(word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }

    // Return all words in the dictionary
    showAll() {
        return dict;
    }

    // Counts number of words in the dictionary
    count() {
        return Object.keys(this.words).length;
    }
    upsert(word: Word) {
        this.update(word);
        this.add(word);
    }

    // Checks if the word exists in the dictionary
    exists(term: string) {
        if (this.words[term] !== undefined) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    // Adds multiple words in a object form
    bulkAdd(wordList: Word[]) {
        wordList.forEach((i) => this.add(i));
    }

    // Deletes multiple words from the dictionary
    bulkDelete(wordList: string[]) {
        wordList.forEach((i) => this.delete(i));
    }
}

// Examples
const dict = new Dict();
const pizza = new Word("pizza", "Italy");
const ramen = new Word("ramen", "Japan");
const kimchi = new Word("kimchi", "Korea");

dict.add(pizza);
dict.add(ramen);
dict.add(kimchi);
dict.get("pizza");
dict.delete("pizza");
dict.update(kimchi);
dict.showAll();
dict.count();
dict.upsert(kimchi);
dict.exists("ramen");
dict.bulkAdd([
    { term: "steak", def: "USA" },
    { term: "bulgogi", def: "korea" },
]);
dict.bulkDelete(["ramen", "steak"]);
