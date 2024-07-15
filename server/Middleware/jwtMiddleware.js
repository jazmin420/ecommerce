const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  // Check if authorization header is present
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Extract token from authorization header
  const token = authHeader.split(' ')[1]; // Bearer <token>
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Attach decoded payload to request object
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = jwtMiddleware;
