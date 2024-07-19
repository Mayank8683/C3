const paginationMiddleware = (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;
    
    const offset = (page - 1) * limit;
    
    req.pagination = { limit: parseInt(limit), offset: parseInt(offset) };
    
    next();
  };
  
  module.exports = paginationMiddleware;
  