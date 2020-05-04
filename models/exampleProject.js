import mongoose from 'mongoose';

const exampleProjectSchema = mongoose.Schema({
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
