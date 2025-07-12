from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

# Models
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    description = db.Column(db.Text)
    tags = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def home():
    questions = Question.query.all()
    return render_template('home.html', questions=questions)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        user = User(username=request.form['username'], password=request.form['password'])
        db.session.add(user)
        db.session.commit()
        return redirect('/login')
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and user.password == request.form['password']:
            login_user(user)
            return redirect('/')
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect('/')

@app.route('/ask', methods=['GET', 'POST'])
@login_required
def ask():
    if request.method == 'POST':
        q = Question(title=request.form['title'], description=request.form['description'], tags=request.form['tags'], user_id=current_user.id)
        db.session.add(q)
        db.session.commit()
        return redirect('/')
    return render_template('ask.html')

@app.route('/question/<int:id>', methods=['GET', 'POST'])
def question(id):
    q = Question.query.get(id)
    if request.method == 'POST':
        a = Answer(content=request.form['content'], question_id=id, user_id=current_user.id)
        db.session.add(a)
        db.session.commit()
    answers = Answer.query.filter_by(question_id=id).all()
    return render_template('question.html', question=q, answers=answers)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
