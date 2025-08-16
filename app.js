const express = require('express');
const { LotsOfDataForPagination } = require('./models/LotsOfDataForPagination'); 
const app = express();


async function paginate(model, page = 1, perPage = 10) {
  const offset = (page - 1) * perPage;

  const totalEntries = await model.count();

  const totalPages = Math.ceil(totalEntries / perPage);

  const results = await model.findAll({
    offset: offset,
    limit: perPage,
  });

  return {
    status: 'success',
    currentPage: page,
    perPage: perPage,
    totalEntries: totalEntries,
    totalPages: totalPages,
    data: results,
  };
}

app.get('/api/v1/paginated-data', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  try {
    const paginatedData = await paginate(LotsOfDataForPagination, page, perPage);
    res.json(paginatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
