import mongoose from 'mongoose';
const ObjectID = mongoose.Schema.Types.ObjectId;

const exampleProjectSchema = mongoose.Schema({
  shopId: {
    type: ObjectID,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const ExampleProject = mongoose.model('ExampleProject', exampleProjectSchema);

export default ExampleProject;
