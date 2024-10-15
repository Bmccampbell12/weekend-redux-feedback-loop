const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET route to retrieve feedback submissions.
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /api/feeback', error);
        res.sendStatus(500);
    });
})
//This route adds a new feedback entry
    // POST a new submission
    router.post('/', async (req, res) => {
        const client = await pool.connect();
        try {

            const { 
                feeling,
                understanding, 
                support, 
                comments, 
            } = req.body;
            
            
            // Inserts submission details into the "feedback" table
            const feedbackInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments, "flagged", "date"")
                VALUES ($1, $2, $3, $4, $5, NOW()) 
                RETURNING id;`, [feeling, understanding, support, comments, false]);

                const feedbackId = feedbackInsertResults.row[0].id;

                const reviews = req.body.reviews || [];

                // Inserts each feedback result page into the "line_item" table.
                await Promise.all(reviews.map(review => {
                    const insterLineItemText = `INSERT INTO "line_item" ("feedback_id, "review") VALUES ($1, $2)`;
                    const insertLineItemValues = [feedbackId, review]
                    return client.query(insterLineItemText, insertLineItemValues);
                }));

                await client.query('COMMIT')
                res.sendStatus(201);
                console.log('Feedback submitted successfully')
            } catch (error) {
                await client.query('ROLLBACK')
                console.log('Error in POST /api/feedback', error)
                res.sendStatus(500)
                .send('Server error');

            } finally {
                client.release()
            }
        
    });

            // ? create route to DELETE feedback submission. 


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
