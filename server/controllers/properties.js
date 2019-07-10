import properties from '../model/propdb';


class propsController {
  static getAll(req, res) {
    return res.status(200).json({
      status: 200,
      data: properties,
    });
  }

  static getById(req, res) {
    const Id = parseInt(req.params.id, 10);
    const viewProp = properties.find(property => property.id === Id);
    if (viewProp) {
      return res.status(200).json({
        status: 200,
        data: viewProp,
      });
    }
    return res.status(404).json({
      status: 'error',
      error: 'Id cannot found',
    });
  }
}


export default propsController;
