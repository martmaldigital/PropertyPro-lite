import propertydb from '../model/propertydb';

class propertyController {
  static getAllProperties(req, res) {
    return res.status(200).json({
      status: 200,
      data: propertydb,
    });
  }
}

export default propertyController;
