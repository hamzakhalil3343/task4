const booksController = {};
const Books = require('../models/books.model');

booksController.getAll = async (req, res) => {
  let books;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    books = await Books.paginate(
      merged,
      {
        offset: parseInt(start),
        limit: parseInt(length)
      }
    );
    res.status(200).send({
      code: 200,
      message: 'Successful',
      data: books
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};

booksController.addBook = async (req, res) => {
  try {

    const body = req.body;

    const book = new Books(body);

  const result = await book.save();

    res.status(200).send({
      code: 200,
      message: 'Book Added Successfully',
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};
module.exports = booksController;