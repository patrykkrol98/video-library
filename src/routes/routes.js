import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import videosController from '../controllers/videosController';

export default () => {
    const api = Router();
    const apiUrl = '/api/videos'

    // homepage
    api.get('/', catchAsync(videosController.randomRecords));
    api.get(`/search`, catchAsync(videosController.searchRecords));

    api.get(`/tags`, catchAsync(videosController.searchByTags));

    api.get(`/add`,  catchAsync(videosController.addRecordForm));
    api.post(`/add`,  catchAsync(videosController.addRecord));

    api.get(`/update/:id`,  catchAsync(videosController.updateRecordForm));
    api.post(`/update/:id`,  catchAsync(videosController.updateRecord));

    return api;
}